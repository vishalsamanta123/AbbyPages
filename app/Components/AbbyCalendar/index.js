import React from "react";
import AbbyCalendarView from "./components/AbbyCalendarView";

const AbbyCalendar = (props) => {
  const { showCalendar = false, endShowCalendar = () => {} } = props;
  console.log('showCalendar: ', showCalendar);
  return (
    showCalendar && (
      <AbbyCalendarView visible={showCalendar} endVisible={endShowCalendar} />
    )
  );
};

export default AbbyCalendar;
