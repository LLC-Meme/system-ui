import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Tab from "./tab";


describe("Tab", () => {

  it("正しい選択肢数でtabを表示", () => {
    const values = ["Tab1", "Tab2", "Tab3"];
    const setSelectedValue = vi.fn();

    render(
      <Tab
        values={values}
        selectedValue="Tab1"
        setSelectedValue={setSelectedValue}
      />
    );

    // 3つの選択肢が表示される
    values.forEach((val) => {
      expect(screen.getByText(val)).toBeInTheDocument();
    });
  });


  it("追加のclassNameが適用される", () => {
    const values = ["Tab1", "Tab2"];
    const setSelectedValue = vi.fn();

    render(
      <Tab
        data-testid="tab-container"
        values={values}
        selectedValue="Tab1"
        setSelectedValue={setSelectedValue}
        className="custom-tab"
      />
    );

    // デフォルトのclassと追加のclassが適用されている
    const container = screen.getByTestId("tab-container");
    expect(container).toHaveClass("custom-tab");
    expect(container).toHaveClass("flex", "p-1", "rounded-[8px]", "bg-surface-muted1");
  });



  it("選択・非選択タブのスタイルが正しい", () => {
    const values = ["Tab1", "Tab2"];
    const setSelectedValue = vi.fn();

    render(
      <Tab
        values={values}
        selectedValue="Tab2"
        setSelectedValue={setSelectedValue}
      />
    );

    // Tab2(選択中)のクラスが正しい
    const selectedTab = screen.getByText("Tab2");
    expect(selectedTab).toHaveClass("bg-surface", "font-medium");

    // Tab1(非選択)のクラスが正しい
    const unselectedTab = screen.getByText("Tab1");
    expect(unselectedTab).toHaveClass("text-foreground-muted");
  });


  it("setSelectedItemがクリックで発火する", () => {
    const values = ["Tab1", "Tab2"];
    const setSelectedValue = vi.fn();

    render(
      <Tab
        values={values}
        selectedValue="Tab1"
        setSelectedValue={setSelectedValue}
      />
    );

    const tab2 = screen.getByText("Tab2");
    fireEvent.click(tab2);

    // setSelectedValueが1回呼ばれる
    expect(setSelectedValue).toHaveBeenCalledTimes(1);
    expect(setSelectedValue).toHaveBeenCalledWith("Tab2");
  });


  it("refが適用される", () => {
    const ref = React.createRef<HTMLDivElement>();
    const values = ["Tab1", "Tab2"];
    const setSelectedValue = vi.fn();

    render(
      <Tab
        ref={ref}
        values={values}
        selectedValue="Tab1"
        setSelectedValue={setSelectedValue}
      />
    );

    // refが正しく設定されていることを確認
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });



});