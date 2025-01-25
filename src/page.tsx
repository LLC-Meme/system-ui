import React, { useState } from "react";
import Header from "./components/layout/header/header";
import Sidebar from "./components/layout/sidebar/sidebar";
import Main from "./components/layout/main/main";
import Collapsible from "./components/UI/collapsible/collapsible";
import Breadcrumb from "./components/UI/breadcrumb/breadcrumb";
import Spacer from "./components/util/spacer/spacer";
import Surface from "./components/UI/surface/surface";
import Title from "./components/UI/title/title";
import Alert from "./components/UI/alert/alert";
import Stack from "./components/util/stack/stack";
import Button from "./components/UI/button/button";
import Modal from "./components/UI/modal/modal";
import SearchWindow from "./components/UI/search-window/search-window";
import Navigation from "./components/UI/navigation/navigation";
import Divider from "./components/UI/divider/divider";
import Sheet from "./components/UI/sheet/sheet";
import Label from "./components/form/label/label";
import Input from "./components/form/input/input";
import Selector from "./components/form/selector/selector";
import LabelText from "./components/form/label-text/label-text";
import Radio from "./components/form/radio/radio";
import Checkbox from "./components/form/checkbox/checkbox";
import Textarea from "./components/form/textarea/textarea";
import ErrorMessage from "./components/form/error-message/error-message";
import ThemeSwitch from "./components/UI/theme-switch/theme-switch";


export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>

      <Header.Container>
        <Header.SidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
        <h1 className="text-2xl font-bold whitespace-nowrap">
          Acme Inc.
        </h1>
        <Stack.H className="w-full justify-end">
          <ThemeSwitch.Container>
            <ThemeSwitch.Light />
            <ThemeSwitch.Dark />
            <ThemeSwitch.System current />
          </ThemeSwitch.Container>
        </Stack.H>
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


      <Main sidebarOpen={sidebarOpen}>

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

        <Spacer.V unit={2} />

        <SearchWindow.Container>
          <SearchWindow.Input placeholder="Search" />
        </SearchWindow.Container>

        <Spacer.V unit={2} />

        <Title.Page>
          Data
        </Title.Page>

        <Alert variant="danger">
          This is an danger alert
        </Alert>

        <Spacer.V />

        <Surface>
          <Title.Section>
            Section Title
          </Title.Section>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <Stack.H className="justify-end mt-6">
            <Modal.Root>
              <Modal.Trigger asChild>
                <Button>
                  Open Modal
                </Button>
              </Modal.Trigger>
              <Modal.Content className="w-96">
                <Modal.Title>
                  Modal Title
                </Modal.Title>
                <Modal.Description className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                  Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                </Modal.Description>
                <Stack.H className="justify-between mt-6">
                  <Modal.Close asChild>
                    <Button variant="danger">
                      Close
                    </Button>
                  </Modal.Close>
                  <Button>
                    Save
                  </Button>
                </Stack.H>
              </Modal.Content>
            </Modal.Root>
          </Stack.H>
        </Surface>


        <Spacer.V unit={2} />

        <Surface>
          <Title.Section>
            Section Title
          </Title.Section>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <p className="mt-4">
            Lorem <Navigation href="/#">ipsum</Navigation> dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. <Navigation href="/#">Fusce</Navigation> nec tellus sed augue semper porta.
          </p>
        </Surface>

        <Spacer.V unit={2} />

        <Surface>
          <Title.Section>
            Section Title
          </Title.Section>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <Divider.H className="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <Divider.H className="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <Stack.H className="justify-end mt-6">
            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button>
                  Open Sheet
                </Button>
              </Sheet.Trigger>
              <Sheet.Content>
                <Sheet.Title>
                  Sheet Title
                </Sheet.Title>
                <Sheet.Description className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Sheet.Description>
                <Spacer.V />

                <form className="flex flex-col gap-6 mt-2">

                  <Label>
                    <LabelText>Input</LabelText>
                    <Input placeholder="input something" />
                    <ErrorMessage>This is an error message.</ErrorMessage>
                  </Label>
                  <Label>
                    <LabelText>Selector</LabelText>
                    <Selector.Select className="w-full">
                      <Selector.DefaultOption>Select an option</Selector.DefaultOption>
                      <Selector.Option>Option 1</Selector.Option>
                      <Selector.Option>Option 2</Selector.Option>
                      <Selector.Option>Option 3</Selector.Option>
                    </Selector.Select>
                  </Label>

                  <Radio.Group>
                    <Radio.LabelText>Radio Group</Radio.LabelText>
                    <Radio.Label>
                      <Radio.Button name="test" />
                      <Radio.Text>Option 1</Radio.Text>
                    </Radio.Label>
                    <Radio.Label>
                      <Radio.Button name="test" />
                      <Radio.Text>Option 2</Radio.Text>
                    </Radio.Label>
                    <Radio.Label>
                      <Radio.Button name="test" />
                      <Radio.Text>Option 3</Radio.Text>
                    </Radio.Label>
                  </Radio.Group>

                  <Checkbox.Container>
                    <Checkbox.LabelText>Checkbox</Checkbox.LabelText>
                    <Checkbox.Label>
                      <Checkbox.Box />
                      <Checkbox.Text>Checkbox 1</Checkbox.Text>
                    </Checkbox.Label>
                    <Checkbox.Label>
                      <Checkbox.Box />
                      <Checkbox.Text>Checkbox 2</Checkbox.Text>
                    </Checkbox.Label>
                  </Checkbox.Container>

                  <Label>
                    <LabelText>Textarea</LabelText>
                    <Textarea placeholder="input something" />
                  </Label>

                  <Spacer.V />
                  <Sheet.Close asChild>
                    <Button variant="default">
                      Save
                    </Button>
                  </Sheet.Close>


                </form>

              </Sheet.Content>
            </Sheet.Root>

          </Stack.H>
        </Surface>


        {/* Table */}
        {/* Tabs */}
        {/* Tooltip */}
        {/* Calendar */}


      </Main>

    </div>
  );
}