import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderSidebarController,
  SidebarContainer,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarItem,
  Main,
  CollapsibleRoot,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleItem,
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbSeparator,
  VSpacer,
  Surface,
  PageTitle,
  BlockTitle,
  Alert,
  HStack,
  Button,
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalClose,
  SearchWindowContainer,
  SearchWindowInput,
  Navigation,
  HDivider,
  SheetRoot,
  SheetContent,
  SheetTrigger,
  SheetClose,
  Label,
  Input,
  Select,
  Option,
  DefaultOption,
  LabelText,
  RadioInput,
  RadioGroup,
  RadioLabel,
  RadioText,
  RadioLabelText,
  CheckboxInput,
  CheckboxText,
  CheckboxLabel,
  CheckboxLabelText,
  CheckboxContainer,
  Textarea,
  ErrorMessage,
  ThemeSwitchContainer,
  ThemeSwitchDark,
  ThemeSwitchLight,
  ThemeSwitchSystem,
  LineChart,
  BarChart,
  PieChart,
  HSpacer,
} from "./components";
import { type LineChartData } from "./components/client/chart/line-chart/line-chart";
import { type BarChartData } from "./components/client/chart/bar-chart/bar-chart";

const lineDummy: LineChartData = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  const date = new Date(2024, 11, day + 15);
  return {
    name: date,
    product1: Math.floor(Math.random() * 500),
    product2: Math.floor(Math.random() * 500),
    product3: Math.floor(Math.random() * 500),
  };
});

const barDummy: BarChartData = Array.from({ length: 8 }, (_, index) => {
  const day = index + 1;
  const date = new Date(2024, 11, day + 15);
  return {
    name: date,
    US: Math.floor(Math.random() * 1000),
    Japan: Math.floor(Math.random() * 1000),
    China: Math.floor(Math.random() * 1000),
  };
});

const pieDummy = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <HeaderContainer>
        <HeaderSidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
        <h1 className="text-xl font-bold whitespace-nowrap">Acme Inc.</h1>
        <HStack className="w-full justify-end">
          <ThemeSwitchContainer>
            <ThemeSwitchDark />
            <ThemeSwitchLight />
            <ThemeSwitchSystem current />
          </ThemeSwitchContainer>
        </HStack>
      </HeaderContainer>

      <SidebarContainer isOpen={sidebarOpen}>
        <SidebarGroup>
          <SidebarGroupTitle>Group Label</SidebarGroupTitle>
          <SidebarItem>Item</SidebarItem>
          <SidebarItem current>Current Item</SidebarItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupTitle>Group Label</SidebarGroupTitle>
          <CollapsibleRoot>
            <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem href="/item1">
                Collapsible Item 1
              </CollapsibleItem>
              <CollapsibleItem href="/item2">
                Collapsible Item 2
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <CollapsibleRoot>
            <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem href="/item1">
                Collapsible Item 1
              </CollapsibleItem>
              <CollapsibleItem href="/item2">
                Collapsible Item 2
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <CollapsibleRoot>
            <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem href="/item1">
                Collapsible Item 1
              </CollapsibleItem>
              <CollapsibleItem href="/item2">
                Collapsible Item 2
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <CollapsibleRoot>
            <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem href="/item1">
                Collapsible Item 1
              </CollapsibleItem>
              <CollapsibleItem href="/item2">
                Collapsible Item 2
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <CollapsibleRoot>
            <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem href="/item1">
                Collapsible Item 1
              </CollapsibleItem>
              <CollapsibleItem href="/item2">
                Collapsible Item 2
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
          <CollapsibleRoot>
            <CollapsibleTrigger>Collapsible Trigger</CollapsibleTrigger>
            <CollapsibleContent>
              <CollapsibleItem href="/item1">
                Collapsible Item 1
              </CollapsibleItem>
              <CollapsibleItem href="/item2">
                Collapsible Item 2
              </CollapsibleItem>
            </CollapsibleContent>
          </CollapsibleRoot>
        </SidebarGroup>
      </SidebarContainer>

      <Main sidebarOpen={sidebarOpen}>
        <BreadcrumbContainer>
          <BreadcrumbItem href="/" current={false}>
            Home
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/dashboard" current={false}>
            Dashboard
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/dashboard/sales" current={false}>
            Sales
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/dashboard/sales/data" current={true}>
            Data
          </BreadcrumbItem>
        </BreadcrumbContainer>

        <SearchWindowContainer>
          <SearchWindowInput placeholder="Search" />
        </SearchWindowContainer>

        <PageTitle>Data</PageTitle>

        <Alert variant="danger">This is an danger alert</Alert>

        <Surface>
          <BlockTitle>Section Title</BlockTitle>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <HStack className="justify-end mt-6">
            <ModalRoot>
              <ModalTrigger asChild>
                <Button>Open Modal</Button>
              </ModalTrigger>
              <ModalContent className="w-96">
                <BlockTitle>Modal Title</BlockTitle>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta.
                </p>
                <HStack className="justify-between mt-6">
                  <ModalClose asChild>
                    <Button variant="danger">Close</Button>
                  </ModalClose>
                  <Button>Save</Button>
                </HStack>
              </ModalContent>
            </ModalRoot>
          </HStack>
        </Surface>

        <Surface>
          <BlockTitle>Section Title</BlockTitle>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <p className="mt-4">
            Lorem <Navigation href="/#">ipsum</Navigation> dolor sit amet,
            consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
            cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
            sed augue semper porta.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. <Navigation href="/#">Fusce</Navigation> nec tellus sed
            augue semper porta.
          </p>
        </Surface>

        <Surface>
          <BlockTitle>Section Title</BlockTitle>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <HDivider className="w-[calc(100%+4rem)] -mx-8 my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <HDivider className="w-[calc(100%+4rem)] -mx-8 my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <HStack className="justify-end mt-6">
            <SheetRoot>
              <SheetTrigger asChild>
                <Button>Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <BlockTitle>Sheet Title</BlockTitle>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <VSpacer />

                <form className="flex flex-col gap-6 mt-2">
                  <Label>
                    <LabelText>Input</LabelText>
                    <Input placeholder="input something" />
                    <ErrorMessage>This is an error message</ErrorMessage>
                  </Label>
                  <Label>
                    <LabelText>Selector</LabelText>
                    <Select className="w-full" defaultValue={""}>
                      <DefaultOption>Select an option</DefaultOption>
                      <Option>Option 1</Option>
                      <Option>Option 2</Option>
                      <Option>Option 3</Option>
                    </Select>
                  </Label>

                  <RadioGroup>
                    <RadioLabelText>Radio Group</RadioLabelText>
                    <RadioLabel>
                      <RadioInput name="test" />
                      <RadioText>Option 1</RadioText>
                    </RadioLabel>
                    <RadioLabel>
                      <RadioInput name="test" />
                      <RadioText>Option 2</RadioText>
                    </RadioLabel>
                    <RadioLabel>
                      <RadioInput name="test" />
                      <RadioText>Option 3</RadioText>
                    </RadioLabel>
                  </RadioGroup>

                  <CheckboxContainer>
                    <CheckboxLabelText>Checkbox</CheckboxLabelText>
                    <CheckboxLabel>
                      <CheckboxInput />
                      <CheckboxText>Checkbox 1</CheckboxText>
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <CheckboxInput />
                      <CheckboxText>Checkbox 2</CheckboxText>
                    </CheckboxLabel>
                  </CheckboxContainer>

                  <Label>
                    <LabelText>Textarea</LabelText>
                    <Textarea placeholder="input something" />
                  </Label>

                  <VSpacer />
                  <SheetClose asChild>
                    <Button variant="default">Save</Button>
                  </SheetClose>
                </form>
              </SheetContent>
            </SheetRoot>
          </HStack>
        </Surface>

        <Surface>
          <BlockTitle>Line Chart</BlockTitle>
          <LineChart
            className="w-full h-[480px] py-8"
            data={lineDummy}
            dataKeys={["product1", "product2", "product3"]}
            hasLegend
          />
        </Surface>

        <HStack>
          <Surface className="flex-1">
            <BlockTitle>Bar Chart</BlockTitle>
            <BarChart
              className="w-full h-96 py-8"
              data={barDummy}
              dataKeys={["US", "Japan", "China"]}
              hasLegend
            />
          </Surface>

          <HSpacer unit={2} />

          <Surface className="w-[400px]">
            <BlockTitle>Pie Chart</BlockTitle>
            <PieChart className="w-full h-80" data={pieDummy} hasLegend />
          </Surface>
        </HStack>

        {/* Table */}
        {/* Tabs */}
        {/* Tooltip */}
        {/* Calendar */}
      </Main>
    </div>
  );
}
