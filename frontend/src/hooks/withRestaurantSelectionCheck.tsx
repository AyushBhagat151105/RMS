import React, { useEffect, useState } from "react";
import { useRestaurantStore } from "@/store/restaurant";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const withRestaurantSelectionCheck = (Component: React.ComponentType) => {
  return function WrappedComponent(props: any) {
    const {
      selectedRestaurantId,
      restaurants,
      getRestaurants,
      selectRestaurant,
    } = useRestaurantStore();
    const [open, setOpen] = useState(false);

    useEffect(() => {
      getRestaurants();
    }, []);

    useEffect(() => {
      if (!selectedRestaurantId) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }, [selectedRestaurantId]);

    const handleSelect = (value: string) => {
      const selected = restaurants.find((r) => r.id === value);
      if (selected) {
        selectRestaurant(selected.id, selected.name);
      }
    };

    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select a Restaurant to Continue</DialogTitle>
            </DialogHeader>

            <Select onValueChange={handleSelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a restaurant" />
              </SelectTrigger>
              <SelectContent>
                {restaurants.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              disabled={!selectedRestaurantId}
              onClick={() => setOpen(false)}
              className="mt-4 w-full"
            >
              Proceed
            </Button>
          </DialogContent>
        </Dialog>

        <Component {...props} />
      </>
    );
  };
};

export default withRestaurantSelectionCheck;
