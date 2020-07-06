import React from 'react';

export function yesno (){
  let values=[];
  values.push(<option>Select</option>);
  values.push(<option value="Y">Yes</option>);
  values.push(<option value="N">No</option>);
  return values;
}