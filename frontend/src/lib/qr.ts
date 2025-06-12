export const downloadQR = async (
  imageUrl: string,
  tableNumber: number | string,
  restaurantName: string,
  options?: {
    backgroundColor?: string
    primaryColor?: string
    accentColor?: string
    logoUrl?: string
    customMessage?: string
    style?: 'modern' | 'classic' | 'elegant' | 'minimal'
  }
) => {
  try {
    const {
      backgroundColor = '#ffffff',
      primaryColor = '#1a1a1a',
      accentColor = '#3b82f6',
      logoUrl,
      customMessage = 'Scan to view menu',
      style = 'modern'
    } = options || {}

    const response = await fetch(imageUrl)
    const imgBlob = await response.blob()

    const img = new Image()
    img.src = URL.createObjectURL(imgBlob)

    img.onload = async () => {
      const qrSize = Math.min(img.width, img.height)
      const padding = 40
      const headerHeight = 80
      const footerHeight = 100
      const logoSize = logoUrl ? 60 : 0
      const logoMargin = logoUrl ? 20 : 0

      const canvas = document.createElement('canvas')
      canvas.width = qrSize + (padding * 2)
      canvas.height = qrSize + headerHeight + footerHeight + logoSize + logoMargin

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Enable high-quality rendering
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'

      // Draw background with gradient or solid color based on style
      if (style === 'modern' || style === 'elegant') {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, backgroundColor)
        gradient.addColorStop(1, style === 'modern' ? '#f8fafc' : '#fafafa')
        ctx.fillStyle = gradient
      } else {
        ctx.fillStyle = backgroundColor
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw decorative elements based on style
      if (style === 'modern') {
        // Modern style: subtle corner accents
        ctx.fillStyle = accentColor + '20' // 20% opacity
        ctx.fillRect(0, 0, 60, 4)
        ctx.fillRect(0, 0, 4, 60)
        ctx.fillRect(canvas.width - 60, 0, 60, 4)
        ctx.fillRect(canvas.width - 4, 0, 4, 60)
      } else if (style === 'elegant') {
        // Elegant style: decorative border
        ctx.strokeStyle = accentColor + '40'
        ctx.lineWidth = 2
        ctx.setLineDash([10, 5])
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20)
        ctx.setLineDash([])
      } else if (style === 'classic') {
        // Classic style: solid border
        ctx.strokeStyle = primaryColor
        ctx.lineWidth = 3
        ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30)
      }

      let currentY = padding

      
      if (logoUrl) {
        try {
          const logoResponse = await fetch(logoUrl)
          const logoBlob = await logoResponse.blob()
          const logoImg = new Image()
          logoImg.src = URL.createObjectURL(logoBlob)
          
          await new Promise((resolve) => {
            logoImg.onload = () => {
              const logoX = (canvas.width - logoSize) / 2
              
              
              ctx.fillStyle = backgroundColor
              ctx.beginPath()
              ctx.arc(logoX + logoSize/2, currentY + logoSize/2, logoSize/2 + 5, 0, 2 * Math.PI)
              ctx.fill()
              
              ctx.strokeStyle = accentColor + '30'
              ctx.lineWidth = 2
              ctx.stroke()
              
             
              ctx.drawImage(logoImg, logoX, currentY, logoSize, logoSize)
              resolve(void 0)
            }
          })
          
          currentY += logoSize + logoMargin
        } catch (logoError) {
          console.warn('Logo loading failed:', logoError)
        }
      }

      ctx.fillStyle = primaryColor
      ctx.textAlign = 'center'
      
      const restaurantFontSize = Math.min(24, canvas.width / restaurantName.length * 1.2)
      ctx.font = `bold ${restaurantFontSize}px system-ui, -apple-system, sans-serif`
      
      
      ctx.shadowColor = primaryColor + '20'
      ctx.shadowBlur = 2
      ctx.shadowOffsetY = 1
      
      ctx.fillText(restaurantName.toUpperCase(), canvas.width / 2, currentY)
      
      
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetY = 0
      
      currentY += 35

     
      const lineWidth = Math.min(120, canvas.width * 0.4)
      const lineX = (canvas.width - lineWidth) / 2
      
      ctx.strokeStyle = accentColor
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(lineX, currentY)
      ctx.lineTo(lineX + lineWidth, currentY)
      ctx.stroke()
      
      currentY += 25

      
      const qrX = (canvas.width - qrSize) / 2
      const cornerRadius = style === 'minimal' ? 0 : 12
      
      if (cornerRadius > 0) {
        ctx.save()
        ctx.beginPath()
        ctx.roundRect(qrX, currentY, qrSize, qrSize, cornerRadius)
        ctx.clip()
      }
      
      ctx.drawImage(img, qrX, currentY, qrSize, qrSize)
      
      if (cornerRadius > 0) {
        ctx.restore()
        
        
        ctx.strokeStyle = primaryColor + '10'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.roundRect(qrX, currentY, qrSize, qrSize, cornerRadius)
        ctx.stroke()
      }
      
      currentY += qrSize + 30

      
      const tableText = `TABLE ${tableNumber}`
      ctx.font = `bold 18px system-ui, -apple-system, sans-serif`
      const tableTextWidth = ctx.measureText(tableText).width
      
      const badgeWidth = tableTextWidth + 30
      const badgeHeight = 35
      const badgeX = (canvas.width - badgeWidth) / 2
      
      ctx.fillStyle = accentColor
      ctx.beginPath()
      ctx.roundRect(badgeX, currentY - 5, badgeWidth, badgeHeight, 17)
      ctx.fill()
      
     
      ctx.fillStyle = '#ffffff'
      ctx.textAlign = 'center'
      ctx.fillText(tableText, canvas.width / 2, currentY + 18)
      
      currentY += 50

      
      ctx.fillStyle = primaryColor + 'CC' // 80% opacity
      ctx.font = `14px system-ui, -apple-system, sans-serif`
      ctx.fillText(customMessage, canvas.width / 2, currentY)

      
      if (style !== 'minimal') {
        ctx.fillStyle = primaryColor + '30'
        ctx.font = '10px system-ui, -apple-system, sans-serif'
        ctx.textAlign = 'right'
        ctx.fillText('QR Menu', canvas.width - 15, canvas.height - 10)
      }

      
      const timestamp = new Date().toISOString().split('T')[0]
      const filename = `${restaurantName.toLowerCase().replace(/\s+/g, '-')}-table-${tableNumber}-${timestamp}.png`
      
      
      canvas.toBlob((blob) => {
        if (!blob) return
        
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        a.style.display = 'none'
        
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        
        
        URL.revokeObjectURL(url)
      }, 'image/png', 1.0)
      
      
      URL.revokeObjectURL(img.src)
    }
  } catch (error) {
    console.error('QR download failed:', error)
    
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const userMessage = errorMessage.includes('fetch') 
      ? 'Failed to load QR code image. Please check your internet connection.'
      : 'Unable to generate QR code download. Please try again.'
    
    alert(userMessage)
  }
}

