import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import Papa from "papaparse";

export function exportToCSV(data: any[], filename = "orders.csv") {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
}

export function exportToExcel(data: any[], filename = "orders.xlsx") {
    const worksheet = utils.json_to_sheet(data);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer = write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, filename);
}

