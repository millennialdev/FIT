import {
  Form,
  PlaceContainer,
  SearchIcon,
  SearchLabel,
  Search,
  SearchContainer,
  Label,
  Select,
  Option,
  ArrowDropdown,
  ButtonContainer,
  Button,
} from './SearchbarStyles';

const Searchbar = () => {
  return (
    <>
      <Form autoComplete='off'>
        <PlaceContainer>
          <SearchIcon />
          <SearchLabel for='search'>Search</SearchLabel>
          <Search
            placeholder='Seattle, Washington'
            type='text'
            id='search'
            name='search'
            pattern='\b[A-Z][a-zA-Z]+,[ ]?[A-Za-z]*\b'
          ></Search>
        </PlaceContainer>
        <SearchContainer>
          <ArrowDropdown />
          <Select id='pod-dropdown'>
            <Option disabled='' value='' style={{ display: 'none' }}>
              Workout Pod Type
            </Option>
            <Option>Bodybuilding</Option>
            <Option>Cycling</Option>
            <Option>HIIT</Option>
            <Option>Pilaties</Option>
          </Select>
          <Label for='pod-dropdown'>Find Gym In</Label>
        </SearchContainer>
        <ButtonContainer>
          <Button filled={false}>Capacity</Button>
          <Button filled={true}>Trainer</Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Searchbar;
