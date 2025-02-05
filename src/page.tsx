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
  SectionTitle,
  Alert,
  HStack,
  Button,
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalClose,
  ModalDescription,
  SearchWindowContainer,
  SearchWindowInput,
  Navigation,
  HDivider,
  SheetRoot,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
  Label,
  Input,
  SelectorSelect,
  SelectorOption,
  SelectorDefaultOption,
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
} from "./components";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <HeaderContainer>
        <HeaderSidebarController onClick={() => setSidebarOpen(!sidebarOpen)} />
        <h1 className="text-2xl font-bold whitespace-nowrap">Acme Inc.</h1>
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

        {/* Table */}
        {/* Tabs */}
        {/* Tooltip */}
        {/* Calendar */}
      </Main>
    </div>
  );
}
