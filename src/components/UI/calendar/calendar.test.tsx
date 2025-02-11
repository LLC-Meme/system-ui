import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import Calendar from "./calendar";

describe("Calendar component", () => {
  // テスト実行前にシステム日時を2025年1月15日に設定して時間を固定
  beforeAll(() => {
    vi.useFakeTimers();
    // 2025年1月15日に設定
    vi.setSystemTime(new Date(2025, 0, 15));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("受け取ったdateをもとに正しい年月を表示", () => {
    // 2025年3月15日のDateオブジェクトを作成
    const testDate = new Date(2025, 2, 15);
    const setDate = vi.fn();

    render(<Calendar date={testDate} setDate={setDate} />);
    expect(screen.getByText("2025年3月")).toBeInTheDocument();
  });

  it("PrevMonthButtonがクリックされたとき、前の月を表示", () => {
    // 2025年3月10日のDateオブジェクトを作成
    const testDate = new Date(2025, 2, 10);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // Prevボタンをクリック
    const prevBtn = screen.getByRole("button", { name: "prev-month" });
    fireEvent.click(prevBtn);

    // 前月(2025年2月)になることを確認
    expect(screen.getByText("2025年2月")).toBeInTheDocument();
  });

  it("1月にPrevMonthButtonがクリックされたとき、前年を表示", () => {
    // 2025年1月10日のDateオブジェクトを作成
    const testDate = new Date(2025, 0, 10);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // Prevボタンをクリック
    const prevBtn = screen.getByRole("button", { name: "prev-month" });
    fireEvent.click(prevBtn);

    // 前月(2024年12月)になることを確認
    expect(screen.getByText("2024年12月")).toBeInTheDocument();
  });

  it("NextMonthButtonがクリックされたとき、次の月を表示", () => {
    // 2025年6月10日のDateオブジェクトを作成
    const testDate = new Date(2025, 5, 20);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // Nextボタンをクリック
    const nextBtn = screen.getByRole("button", { name: "next-month" });
    fireEvent.click(nextBtn);

    // 次月(2025年6月)になることを確認
    expect(screen.getByText("2025年7月")).toBeInTheDocument();
  });

  it("12月にNextMonthButtonがクリックされたとき、次年を表示", () => {
    // 2025年12月10日のDateオブジェクトを作成
    const testDate = new Date(2025, 11, 1);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // Nextボタンをクリック
    const nextBtn = screen.getByRole("button", { name: "next-month" });
    fireEvent.click(nextBtn);

    // 次月(2026年1月)になることを確認
    expect(screen.getByText("2026年1月")).toBeInTheDocument();
  });

  it("日付がクリックされたとき、setDateが呼ばれる", () => {
    // 2025年4月5日のDateオブジェクトを作成
    const testDate = new Date(2025, 3, 5);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 15日をクリック
    const day15 = screen.getByText("15");
    fireEvent.click(day15);

    // setDateが1回呼ばれることを確認
    expect(setDate).toHaveBeenCalledTimes(1);
    // setDateに渡された引数を取得
    const newDate = setDate.mock.calls[0][0];

    // 2025年4月15日になることを確認
    expect(newDate.getFullYear()).toBe(2025);
    expect(newDate.getMonth()).toBe(3);
    expect(newDate.getDate()).toBe(15);
  });

  it("disableAfterで指定した日付以降の日付を無効化", () => {
    // 2025年4月5日のDateオブジェクトを作成
    const testDate = new Date(2025, 3, 5);
    const setDate = vi.fn();
    render(
      <Calendar
        date={testDate}
        setDate={setDate}
        disableAfter={new Date(2025, 3, 10)} // 2025年4月10日以降を無効化
      />,
    );

    // 11日をクリック
    const day11 = screen.getByText("11");
    fireEvent.click(day11);

    // setDateが呼ばれないことを確認
    expect(setDate).not.toHaveBeenCalled();
  });

  it("disableBeforeで指定した日付以前の日付を無効化", () => {
    // 2025年4月15日のDateオブジェクトを作成
    const testDate = new Date(2025, 3, 15);
    const setDate = vi.fn();
    render(
      <Calendar
        date={testDate}
        setDate={setDate}
        disableBefore={new Date(2025, 3, 10)} // 2025年4月10日以前を無効化
      />,
    );

    // 9日をクリック
    const day9 = screen.getByText("9");
    fireEvent.click(day9);

    // setDateが呼ばれないことを確認
    expect(setDate).not.toHaveBeenCalled();
  });

  it("2025年3月のカレンダーが1日から31日まで正しく表示される", () => {
    // 2025年3月15日のDateオブジェクトを作成
    const testDate = new Date(2025, 2, 15);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 1日から31日までの日付が表示されていることを確認
    for (let day = 1; day <= 31; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }

    // 32日が表示されていないことを確認
    expect(screen.queryByText("32")).not.toBeInTheDocument();
  });

  it("2025年2月のカレンダーが1日から28日まで正しく表示される", () => {
    // 2025年2月15日のDateオブジェクトを作成
    const testDate = new Date(2025, 1, 15);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 1日から28日までの日付が表示されていることを確認
    for (let day = 1; day <= 28; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }

    // 32日が表示されていないことを確認
    expect(screen.queryByText("29")).not.toBeInTheDocument();
  });

  it("2028年2月(閏年)のカレンダーが1日から29日まで正しく表示される", () => {
    // 2028年2月15日のDateオブジェクトを作成
    const testDate = new Date(2028, 1, 15);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 1日から29日までの日付が表示されていることを確認
    for (let day = 1; day <= 29; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }

    // 30日が表示されていないことを確認
    expect(screen.queryByText("30")).not.toBeInTheDocument();
  });

  it("2100年2月(非閏年)のカレンダーが1日から28日まで正しく表示される", () => {
    // 2100年2月15日のDateオブジェクトを作成
    const testDate = new Date(2100, 1, 15);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 1日から28日までの日付が表示されていることを確認
    for (let day = 1; day <= 28; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }

    // 29日が表示されていないことを確認
    expect(screen.queryByText("29")).not.toBeInTheDocument();
  });

  it("2400年2月(閏年)のカレンダーが1日から29日まで正しく表示される", () => {
    // 2400年2月15日のDateオブジェクトを作成
    const testDate = new Date(2400, 1, 15);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 1日から29日までの日付が表示されていることを確認
    for (let day = 1; day <= 29; day++) {
      expect(screen.getByText(day.toString())).toBeInTheDocument();
    }

    // 30日が表示されていないことを確認
    expect(screen.queryByText("30")).not.toBeInTheDocument();
  });

  it("dateがnullの場合は現在の日付で表示し、どの日付も選択されない", () => {
    const setDate = vi.fn();
    render(<Calendar date={null} setDate={setDate} />);

    // 現在のシステム年月(2025年1月)が表示されていることを確認
    expect(screen.getByText("2025年1月")).toBeInTheDocument();

    // 1日から31日までの日付が表示されていることを確認
    const day15 = screen.getByText("15");
    expect(day15).not.toHaveClass("bg-info", "text-on-status");
  });

  it("選択された日付の背景が変わる", () => {
    // 2025年5月20日のDateオブジェクトを作成
    const testDate = new Date(2025, 4, 20);
    const setDate = vi.fn();
    render(<Calendar date={testDate} setDate={setDate} />);

    // 20日のクラスを確認
    const day20 = screen.getByText("20");
    expect(day20).toHaveClass("bg-info", "text-on-status");
  });

  it("refが正しく設定されている", () => {
    const ref = React.createRef<HTMLDivElement>();
    const setDate = vi.fn();
    render(<Calendar date={new Date()} ref={ref} setDate={setDate} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
