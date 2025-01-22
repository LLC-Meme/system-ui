import React, { useState, useMemo, useCallback, memo } from "react";
import { cn } from "../../../utils/cn";
import Arrow from "../../symbol/arrow/arrow";


export interface CalendarProps {
  /** 選択された日付 */
  date: Date | null;
  /** 日付を設定する関数 */
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  /** この日付以降を無効にする(その日を含む) */
  disableAfter?: Date;
  /** この日付以前を無効にする(その日を含む) */
  disableBefore?: Date;
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(({
  date,
  setDate,
  disableAfter,
  disableBefore,
}: {
  date: Date | null,
  setDate: React.Dispatch<React.SetStateAction<Date | null>>
  disableAfter?: Date;
  disableBefore?: Date;
}, ref) => {

  const [focusedYear, setFocusedYear] = useState(date ? date.getFullYear() : new Date().getFullYear());
  const [focusedMonth, setFocusedMonth] = useState(date ? date.getMonth() : new Date().getMonth());

  const daysInMonth = new Date(focusedYear, focusedMonth + 1, 0).getDate();
  const firstDay = new Date(focusedYear, focusedMonth, 1).getDay();

  const days = useMemo(() => Array.from({ length: daysInMonth }, (_, i) => i + 1), [daysInMonth]);
  const emptyDays = useMemo(() => Array.from({ length: firstDay }, (_, i) => i), [firstDay]);


  const handleDateClick = useCallback((day: number) => {
    setDate(new Date(focusedYear, focusedMonth, day));
  }, [focusedYear, focusedMonth, setDate]);

  const handlePrevMonthClick = useCallback(() => {
    if (focusedMonth === 0) {
      setFocusedYear((prev) => prev - 1);
      setFocusedMonth(11);
    } else {
      setFocusedMonth((prev) => prev - 1);
    }
  }, [focusedMonth]);

  const handleNextMonthClick = useCallback(() => {
    if (focusedMonth === 11) {
      setFocusedYear((prev) => prev + 1);
      setFocusedMonth(0);
    } else {
      setFocusedMonth((prev) => prev + 1);
    }
  }, [focusedMonth]);

  return (
    <div
      ref={ref}
      className="p-6 overlay rounded-lg"
    >

      <div className="flex items-center justify-between">
        <PrevMonthButton onClick={handlePrevMonthClick} />
        <div className="text-lg">
          {focusedYear}年{focusedMonth + 1}月
        </div>
        <NextMonthButton onClick={handleNextMonthClick} />
      </div>

      <div className="grid grid-cols-7">
        <DayLabel>日</DayLabel>
        <DayLabel>月</DayLabel>
        <DayLabel>火</DayLabel>
        <DayLabel>水</DayLabel>
        <DayLabel>木</DayLabel>
        <DayLabel>金</DayLabel>
        <DayLabel>土</DayLabel>

        {emptyDays.map((_, i) => (
          <div key={i} className="w-12 h-12" />
        ))}

        {days.map((day) => {
          const dayDate = new Date(focusedYear, focusedMonth, day);

          const isDisabled =
            (disableAfter && dayDate > disableAfter) ||
            (disableBefore && dayDate < disableBefore);

          return (
            <Day
              key={day}
              isSelected={
                !!date &&
                date.getFullYear() === focusedYear &&
                date.getMonth() === focusedMonth &&
                date.getDate() === day
              }
              disabled={isDisabled}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </Day>
          );
        })}

      </div>

    </div>
  );
});
Calendar.displayName = "Calendar";


const PrevMonthButton = memo(function PrevMonthButton({
  onClick
}: {
  onClick: () => void;
}) {
  return (
    <button
      className="w-6 h-6 center cursor-pointer hover:bg-info-muted rounded-[4px] border border-info"
      onClick={onClick}
    >
      <Arrow.Left className="w-2 h-auto fill-info" />
    </button>
  );
});

const NextMonthButton = memo(function NextMonthButton({
  onClick
}: {
  onClick: () => void;
}) {
  return (
    <button
      className="w-6 h-6 center cursor-pointer hover:bg-info-muted rounded-[4px] border border-info"
      onClick={onClick}
    >
      <Arrow.Right className="w-2 h-auto fill-info" />
    </button>
  );
});


function DayLabel({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-12 h-12 center text-foreground-muted font-medium">
      {children}
    </div>
  );
}


const Day = memo(function Day({
  children,
  isSelected = false,
  disabled = false,
  onClick,
}: {
  children: React.ReactNode,
  isSelected?: boolean,
  disabled?: boolean,
  onClick: () => void,
}) {
  return (
    <div
      className={cn(
        "w-12 h-12 center rounded-[4px]",
        disabled && "text-foreground-muted cursor-not-allowed",
        !disabled && "cursor-pointer font-medium",
        (!isSelected && !disabled) && "hover:bg-info-muted",
        isSelected && "bg-info text-on-status",
      )}
      onClick={() => {if (!disabled) onClick()}}
    >
      {children}
    </div>
  );
});


export default Calendar;