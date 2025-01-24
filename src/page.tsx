import React, { useState } from "react";
import Header from "./components/layout/header/header";
import Sidebar from "./components/layout/sidebar/sidebar";
import Collapsible from "./components/UI/collapsible/collapsible";
import Breadcrumb from "./components/UI/breadcrumb/breadcrumb";
import { cn } from "./lib/cn";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>

      <Header.Container>
        <Header.SidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
        <h1 className="text-2xl font-bold">
          Acme Inc.
        </h1>
      </Header.Container>

      <Sidebar.Container isOpen={sidebarOpen}>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Group Label</Sidebar.GroupLabel>
          <Sidebar.Item>Item</Sidebar.Item>
          <Sidebar.Item current>Current Item</Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Group Label</Sidebar.GroupLabel>
          <Collapsible.Container>
            <Collapsible.Trigger>
              Collapsible Trigger
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Collapsible.Item href="/item1">
                Collapsible Item 1
              </Collapsible.Item>
              <Collapsible.Item href="/item2">
                Collapsible Item 2
              </Collapsible.Item>
            </Collapsible.Content>
          </Collapsible.Container>
          <Collapsible.Container>
            <Collapsible.Trigger>
              Collapsible Trigger
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Collapsible.Item href="/item1">
                Collapsible Item 1
              </Collapsible.Item>
              <Collapsible.Item href="/item2">
                Collapsible Item 2
              </Collapsible.Item>
            </Collapsible.Content>
          </Collapsible.Container>
          <Collapsible.Container>
            <Collapsible.Trigger>
              Collapsible Trigger
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Collapsible.Item href="/item1">
                Collapsible Item 1
              </Collapsible.Item>
              <Collapsible.Item href="/item2">
                Collapsible Item 2
              </Collapsible.Item>
            </Collapsible.Content>
          </Collapsible.Container>
          <Collapsible.Container>
            <Collapsible.Trigger>
              Collapsible Trigger
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Collapsible.Item href="/item1">
                Collapsible Item 1
              </Collapsible.Item>
              <Collapsible.Item href="/item2">
                Collapsible Item 2
              </Collapsible.Item>
            </Collapsible.Content>
          </Collapsible.Container>
          <Collapsible.Container>
            <Collapsible.Trigger>
              Collapsible Trigger
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Collapsible.Item href="/item1">
                Collapsible Item 1
              </Collapsible.Item>
              <Collapsible.Item href="/item2">
                Collapsible Item 2
              </Collapsible.Item>
            </Collapsible.Content>
          </Collapsible.Container>
          <Collapsible.Container>
            <Collapsible.Trigger>
              Collapsible Trigger
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Collapsible.Item href="/item1">
                Collapsible Item 1
              </Collapsible.Item>
              <Collapsible.Item href="/item2">
                Collapsible Item 2
              </Collapsible.Item>
            </Collapsible.Content>
          </Collapsible.Container>
        </Sidebar.Group>
      </Sidebar.Container>


      <main
        className={cn(
          "mt-16 pt-6 px-8 pb-12",
          "transition-[margin-left]",
          sidebarOpen ? "ml-80" : "ml-0"
        )}
      >

        <Breadcrumb.Container>
          <Breadcrumb.Item href="/" current={false}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/dashboard" current={false}>
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/dashboard/sales" current={false}>
            Sales
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item href="/dashboard/sales/data" current={true}>
            Data
          </Breadcrumb.Item>
        </Breadcrumb.Container>

      </main>

    </div>
  );
}