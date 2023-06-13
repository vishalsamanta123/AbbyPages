import React from "react";
import AbbyCalendarView from "./components/AbbyCalendarView";

const AbbyCalendar = (props) => {
  const { showCalendar = false, endShowCalendar = () => {} } = props;
  return (
    showCalendar && (
      <AbbyCalendarView visible={showCalendar} endVisible={endShowCalendar} />
    )
  );
};

export default AbbyCalendar;
