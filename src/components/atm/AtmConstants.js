import React from 'react';

export function yesno (){
  let values=[];
  values.push(<option>Select</option>);
  values.push(<option value="Y">Yes</option>);
  values.push(<option value="N">No</option>);
  return values;
}

export function status(){
  let values=[];
  values.push(<option>Select</option>);
  values.push(<option value="1" selected>Active</option>);
  values.push(<option value="0" >Inactive</option>);
  values.push(<option value="2">Out of Service</option>);
  return values;
}

export function types(){
  let values=[];
  values.push(<option>Select</option>);
  values.push(<option value="NDC">NDC</option>);
  values.push(<option value="D912">D912</option>);
  return values;
}

export function currencyVals(){
  let values=[];
  values.push(<option>Select</option>);
  values.push(<option value="50">50</option>)
  values.push(<option value="100">100</option>)
  values.push(<option value="200">200</option>)
  values.push(<option value="500">500</option>)
  values.push(<option value="2000">2000</option>)
  return values;
}

export function states () {
  let stateValues = [];
  stateValues.push(<option>Select</option>);
  stateValues.push(<option value="AP">Andhra Pradesh</option>);
  stateValues.push(<option value="AR">Arunachal Pradesh</option>);
  stateValues.push(<option value="AS">Assam</option>);
  stateValues.push(<option value="BR">Bihar</option>);
  stateValues.push(<option value="CG">Chhattisgarh</option>);
  stateValues.push(<option value="DL">Delhi</option>);
  stateValues.push(<option value="GA">Goa</option>);
  stateValues.push(<option value="GJ">Gujarat</option>);
  stateValues.push(<option value="HR">Haryana</option>);
  stateValues.push(<option value="HP">Himachal Pradesh</option>);
  stateValues.push(<option value="JK">Jammu & Kashmir</option>);
  stateValues.push(<option value="JH">Jharkhand</option>);
  stateValues.push(<option value="KA">Karnataka</option>);
  stateValues.push(<option value="KL">Kerala</option>);
  stateValues.push(<option value="MP">Madhya Pradesh</option>);
  stateValues.push(<option value="MH">Maharashtra</option>);
  stateValues.push(<option value="MN">Manipur</option>);
  stateValues.push(<option value="ML">Meghalaya</option>);
  stateValues.push(<option value="MZ">Mizoram</option>);
  stateValues.push(<option value="NL">Nagaland</option>);
  stateValues.push(<option value="OR">Orissa</option>);
  stateValues.push(<option value="PB">Punjab</option>);
  stateValues.push(<option value="RJ">Rajasthan</option>);
  stateValues.push(<option value="SK">Sikkim</option>);
  stateValues.push(<option value="TN">Tamil Nadu</option>);
  stateValues.push(<option value="TR">Tripura</option>);
  stateValues.push(<option value="UK">Uttarakhand</option>);
  stateValues.push(<option value="UP">Uttar Pradesh</option>);
  stateValues.push(<option value="WB">West Bengal</option>);
  stateValues.push(<option value="AN">Andaman & Nicobor</option>);
  stateValues.push(<option value="CH">Chandigarh</option>);
  stateValues.push(<option value="DN">Dadra and Nagar Haveli</option>);
  stateValues.push(<option value="DD">Daman & Diu</option>);
  stateValues.push(<option value="LD">Lakshadweep</option>);
  stateValues.push(<option value="PY">Pondicherry</option>);
  return stateValues;
};

//CardHolder Authentication Capability
export function cardholderAuthCapability () {
  let values = [];
  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">No Electric Authentication</option>);
  values.push(<option value="2">PIN</option>);
  values.push(<option value="3">Biometric</option>);
  return values;
};


//Card Capture Capability
export function cardCaptureCapability () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">None</option>);
  values.push(<option value="1">No capture capability</option>);
  values.push(<option value="2">Capture capability</option>);

  return values;
};


//CardHolder Authentication Mode
export function cardholderAuthMode () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">Not Authenticated</option>);
  values.push(<option value="2">PIN</option>);
  values.push(<option value="3">Signature</option>);
  values.push(<option value="4">Biometric</option>);
  values.push(<option value="5">OTP</option>);
  values.push(<option value="6">E-Commerce Type1 PIN</option>);
  values.push(<option value="7">E-Commerce Type1 OTP</option>);
  values.push(<option value="8">Ecom Type 2</option>);
  values.push(<option value="9">IVR Type 2</option>);

  return values;
};

//Terminal Operating Environment
export function terminalOperatingEnv () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(
    <option value="1">On premises of card acceptor, attended</option>
  );
  values.push(
    <option value="2">On premises of card acceptor, unattended</option>
  );
  values.push(
    <option value="3">Off premises of card acceptor, attended</option>
  );
  values.push(
    <option value="4">Off premises of card acceptor, unattended</option>
  );
  values.push(<option value="5">On premises of cardholder, unattended</option>);
  values.push(<option value="6">No terminal used</option>);

  return values;
};



//Card Data Input Capability
export function cardDataInputCapability () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">Magnetic Stripe Read capability</option>);
  values.push(<option value="2">ICC capability</option>);
  values.push(
    <option value="3">Magnetic Stripe and key entry capability</option>
  );
  values.push(<option value="4">Magnetic Stripe and ICC capability</option>);
  values.push(<option value="5">Manual, no terminal</option>);
  values.push(<option value="6">Key entered</option>);

  return values;
};

//Card Data Output Capability
export function cardDataOutputCapability () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">None</option>);
  values.push(<option value="1">Magnetic Stipe write</option>);
  values.push(<option value="2">ICC write</option>);

  return values;
};

//Card Holder Authentication Entity
export function cardholderAuthEntity () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">ICC</option>);
  values.push(<option value="2">CAD</option>);
  values.push(<option value="C">Type3 (3D if issuer opted for ICS1)</option>);
  values.push(<option value="D">Type4 (3D if issuer opted for ICS2)</option>);
  values.push(
    <option value="A">Type1(Rupay E-Commerce implementation)</option>
  );
  values.push(<option value="I">Type2 (3D if issuer opted for Rupay)</option>);

  return values;
};

//Card Holder Data
export function cardHolderData () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">Card Holder present</option>);
  values.push(
    <option value="2">Card Holder not present, unspecified reason</option>
  );
  values.push(
    <option value="3">Card Holder not present, mail transaction</option>
  );
  values.push(
    <option value="4">Card Holder not present, telephone transaction</option>
  );
  values.push(
    <option value="5">Card Holder not present, standing instruction</option>
  );
  values.push(<option value="6">E-Commerce transaction</option>);
  values.push(<option value="7">IVR transaction</option>);

  return values;
};

//Card Present Data
export function cardPresentData () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">None</option>);
  values.push(<option value="1">Card not present</option>);
  values.push(<option value="2">Card present</option>);

  return values;
};

//Card Data Input Model
export function cardDataInputMode () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">Manual input, no terminal</option>);
  values.push(<option value="2">Magnetic Stipe read</option>);
  values.push(<option value="3">Online chip</option>);
  values.push(<option value="4">Offline chip</option>);
  values.push(<option value="5">Ecommerce</option>);
  values.push(<option value="6">IVR</option>);
  values.push(<option value="7">Key entered</option>);

  return values;
};

//Terminal Data Output Capability
export function terminalDataOutputCapability () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">Unknown</option>);
  values.push(<option value="1">Print capability</option>);
  values.push(<option value="2">Display capability</option>);
  values.push(<option value="3">Print and Display capability</option>);

  return values;
};

//Pin Capture Capability
export function pinCaptureCapability () {
  let values = [];

  values.push(<option>Select</option>);
  values.push(<option value="0">No PIN Capture capability</option>);
  values.push(<option value="1">4 chars maximum</option>);
  values.push(<option value="2">5 chars maximum</option>);
  values.push(<option value="3">6 chars maximum</option>);
  values.push(<option value="4">7 chars maximum</option>);
  values.push(<option value="5">8 chars maximum</option>);
  values.push(<option value="6">9 chars maximum</option>);
  values.push(<option value="7">10 chars maximum</option>);
  values.push(<option value="8">11 chars maximum</option>);
  values.push(<option value="9">12 chars maximum</option>);

  return values;
};
