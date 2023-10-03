import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = () => {
  return (
    <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
      <Input
        type="search"
        className="cr-search-form__input"
        style={{backgroundColor:'transparent', width: '20rem'}}
        placeholder="Buscar"
      />
      <MdSearch
        size="20"
        className="cr-search-form__icon-search "
        
      />
    </Form>
  );
};

export default SearchInput;
