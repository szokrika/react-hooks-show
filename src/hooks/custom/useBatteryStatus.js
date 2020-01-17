import { useState, useEffect } from "react";

export default function useBatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState();

  useEffect(() => {
    navigator.getBattery().then(battery => {
      setBatteryLevel(battery.level * 100 + '%');
      battery.addEventListener("levelchange", function() {
        setBatteryLevel(this.level * 100 + '%');
      });
    });
  }, []);

  return { batteryLevel };
}
