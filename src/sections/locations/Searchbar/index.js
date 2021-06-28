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

const Searchbar = ({ data }) => {
  return (
    <>
      <Form autoComplete='off'>
        <PlaceContainer>
          <SearchIcon />
          <SearchLabel htmlFor='search'>{data.inputLabel}</SearchLabel>
          <Search
            placeholder={data.cityDefaultText}
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
              {data.roomDefaultText}
            </Option>
            {data.roomTypes.map((type) => {
              return <Option key={type.id}>{type.type}</Option>;
            })}
          </Select>
          <Label htmlFor='pod-dropdown'>{data.dropdownLabel}</Label>
        </SearchContainer>
        <ButtonContainer>
          {data.filterButtons.map((button) => {
            return (
              <Button key={button.id} filled={button.filled}>
                {button.text}
              </Button>
            );
          })}
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Searchbar;
