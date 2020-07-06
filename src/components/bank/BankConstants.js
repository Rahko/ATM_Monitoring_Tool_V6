import React from 'react';

export function bankStat() {
    let items=[];
    items.push(<option>Select</option>)
    items.push(<option value="1">Active</option>);
    items.push(<option value="0">Inactive</option>);
    items.push(<option value="2">Out-Of-Service</option>);
    return items;
}

export function pinVerifyTimeout() {
    let items = [];
    items.push(<option>Select</option>)
    for (let i = 0; i <= 30; i++) {
      items.push(<option value={i}>{i} Seconds</option>);
    }
    return items;
  }


export function yesno(){
  let items = [];
  items.push(<option>Select</option>)
  items.push(<option value='Y'>Yes</option>);
  items.push(<option value='N'>No</option>)
  return items; 
}