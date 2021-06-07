import {
  BillboardContainer,
  H1,
  P,
  Form,
  FormContainer,
  OptionsContainer,
  Label,
  Select,
  Option,
  OptGroup,
  ButtonContainer,
  Button,
  ArrowDropdown,
  DropdownMap,
} from './LocationBillboardStyles';

const LocationBillboard = () => {
  return (
    <>
      <BillboardContainer>
        <H1>Reimagine Your Gym Space</H1>
        <P>
          Whether you’re an established gym or a brand new trainer, discover
          flexible spaces and solutions to move your business forward.
        </P>
        <Form>
          <FormContainer>
            <OptionsContainer>
              <ArrowDropdown />
              <Select id='locations-dropdown'>
                <OptGroup label='United States'>
                  <Option disabled='' value='' style={{ display: 'none' }}>
                    Seattle
                  </Option>
                  <Option>Atlanta</Option>
                  <Option>Austin</Option>
                  <Option>Boston</Option>
                  <Option>Seattle</Option>
                </OptGroup>
                <OptGroup label='Argentina'>
                  <Option>Buenos Aires</Option>
                </OptGroup>
              </Select>
              <Label for='locations-dropdown' id='123'>
                Find Gym In
              </Label>
              <DropdownMap />
            </OptionsContainer>

            <ButtonContainer>
              <Button>Start</Button>
            </ButtonContainer>
          </FormContainer>
        </Form>
      </BillboardContainer>
    </>
  );
};

export default LocationBillboard;
