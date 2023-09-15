import React from "react";
import { Header, Form, FormButton, LabelButton, InputFrom } from './SearchBar.Styled';



export const SearchBar = ({onSubmit}) => {
   return(
<Header>
  <Form onSubmit={evt => { 
    evt.preventDefault()
    onSubmit(evt.target.elements.query.value)
    evt.target.reset()}}>
    <FormButton type="submit">
      <LabelButton>Search</LabelButton>
    </FormButton>

    <InputFrom
    name="query"
      type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
  </Form>
</Header>
   )
};