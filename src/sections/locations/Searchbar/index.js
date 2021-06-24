import {
  Form,
  SearchIcon,
  SearchLabel,
  Search,
  OptionsContainer,
  Label,
  Select,
  Option,
  ArrowDropdown,
} from './SearchbarStyles';

const Searchbar = () => {
  return (
    <>
      <Form autoComplete='off'>
        <SearchIcon />
        <SearchLabel for='search'>Search</SearchLabel>
        <Search
          placeholder='Seattle, WA'
          type='text'
          id='search'
          name='search'
          pattern='\b[A-Z][a-zA-Z]+,[ ]?[A-Za-z]*\b'
          required
        ></Search>
        <div>
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
        </div>
      </Form>
    </>
  );
};

export default Searchbar;
