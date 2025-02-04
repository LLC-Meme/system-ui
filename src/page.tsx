import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderSidebarController,
} from "./components/server/header/header";
import {
  SidebarContainer,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
} from "./components/server/sidebar/sidebar";
import { Main } from "./components";
import {
  CollapsibleRoot,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleItem,
} from "./components/client/collapsible/collapsible";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "./components/server/breadcrumb/breadcrumb";
import { VSpacer } from "./components/server/spacer/spacer";
import { Surface } from "./components/server/surface/surface";
import { PageTitle, SectionTitle } from "./components/server/title/title";
import { Alert } from "./components/server/alert/alert";
import { HStack } from "./components/server/stack/stack";
import { Button } from "./components/server/button/button";
import {
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalClose,
  ModalDescription,
} from "./components/client/modal/modal";
import {
  SearchWindowContainer,
  SearchWindowInput,
} from "./components/server/search-window/search-window";
import { Navigation } from "./components/server/navigation/navigation";
import { HDivider } from "./components/server/divider/divider";
import {
  SheetRoot,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./components/client/sheet/sheet";
import { Label } from "./components/server/label/label";
import { Input } from "./components/server/input/input";
import {
  SelectorSelect,
  SelectorOption,
  SelectorDefaultOption,
} from "./components/client/selector/select";
import { LabelText } from "./components/server/label-text/label-text";
import {
  RadioButton,
  RadioGroup,
  RadioLabel,
  RadioText,
  RadioLabelText,
} from "./components/server/radio/radio";
import {
  CheckboxBox,
  CheckboxText,
  CheckboxLabel,
  CheckboxLabelText,
  CheckboxContainer,
} from "./components/server/checkbox/checkbox";
import { Textarea } from "./components/server/textarea/textarea";
import { ErrorMessage } from "./components/server/error-message/error-message";
import {
  ThemeContainer,
  ThemeDark,
  ThemeLight,
  ThemeSystem,
} from "./components/server/theme-switch/theme-switch";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <HeaderContainer>
        <HeaderSidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
        <h1 className="text-2xl font-bold whitespace-nowrap">Acme Inc.</h1>
        <HStack className="w-full justify-end">
          <ThemeContainer>
            <ThemeLight />
            <ThemeDark />
            <ThemeSystem current />
          </ThemeContainer>
        </HStack>
      </HeaderContainer>

      <SidebarContainer isOpen={sidebarOpen}>
        <SidebarGroup>
          <SidebarGroupLabel>Group Label</SidebarGroupLabel>
          <SidebarItem>Item</SidebarItem>
          <SidebarItem current>Current Item</SidebarItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Group Label</SidebarGroupLabel>
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

        <VSpacer unit={2} />

        <SearchWindowContainer>
          <SearchWindowInput placeholder="Search" />
        </SearchWindowContainer>

        <VSpacer unit={2} />

        <PageTitle>Data</PageTitle>

        <Alert variant="danger">This is an danger alert</Alert>

        <VSpacer />

        <Surface>
          <SectionTitle>Section Title</SectionTitle>
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
                <ModalTitle>Modal Title</ModalTitle>
                <ModalDescription className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta.
                </ModalDescription>
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

        <VSpacer unit={2} />

        <Surface>
          <SectionTitle>Section Title</SectionTitle>
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

        <VSpacer unit={2} />

        <Surface>
          <SectionTitle>Section Title</SectionTitle>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <HDivider className="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <HDivider className="my-4" />
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
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </SheetDescription>
                <VSpacer />

                <form className="flex flex-col gap-6 mt-2">
                  <Label>
                    <LabelText>Input</LabelText>
                    <Input placeholder="input something" />
                    <ErrorMessage>This is an error message</ErrorMessage>
                  </Label>
                  <Label>
                    <LabelText>Selector</LabelText>
                    <SelectorSelect className="w-full">
                      <SelectorDefaultOption>
                        Select an option
                      </SelectorDefaultOption>
                      <SelectorOption>Option 1</SelectorOption>
                      <SelectorOption>Option 2</SelectorOption>
                      <SelectorOption>Option 3</SelectorOption>
                    </SelectorSelect>
                  </Label>

                  <RadioGroup>
                    <RadioLabelText>Radio Group</RadioLabelText>
                    <RadioLabel>
                      <RadioButton name="test" />
                      <RadioText>Option 1</RadioText>
                    </RadioLabel>
                    <RadioLabel>
                      <RadioButton name="test" />
                      <RadioText>Option 2</RadioText>
                    </RadioLabel>
                    <RadioLabel>
                      <RadioButton name="test" />
                      <RadioText>Option 3</RadioText>
                    </RadioLabel>
                  </RadioGroup>

                  <CheckboxContainer>
                    <CheckboxLabelText>Checkbox</CheckboxLabelText>
                    <CheckboxLabel>
                      <CheckboxBox />
                      <CheckboxText>Checkbox 1</CheckboxText>
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <CheckboxBox />
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

        {/* Table */}
        {/* Tabs */}
        {/* Tooltip */}
        {/* Calendar */}
      </Main>
    </div>
  );
}
