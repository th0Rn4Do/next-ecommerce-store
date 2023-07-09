'use client';

import { useState } from 'react';
import styles from './CheckOutForm.module.scss';

export default function CheckOutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const validate = () => {
    return (
      firstName.length &&
      lastName.length &&
      email.length &&
      address.length &&
      city.length &&
      postalCode.length &&
      country.length &&
      creditCard.length &&
      expirationDate.length &&
      securityCode.length
    );
  };

  return (
    <form>
      <div className={styles.formpositioning}>
        <h2>Your billing details</h2>

        <label>
          <input
            data-test-id="checkout-first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            required
          />{' '}
          First name
        </label>
        <br />
        <label>
          <input
            data-test-id="checkout-last-name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            required
          />{' '}
          Last name
        </label>

        <br />
        <label>
          <input
            data-test-id="checkout-email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />{' '}
          Email
        </label>
        <br />
        <label>
          <input
            data-test-id="checkout-address"
            value={address}
            onChange={(event) => setAddress(event.currentTarget.value)}
            required
          />{' '}
          Address
        </label>
        <br />

        <label>
          <input
            data-test-id="checkout-city"
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
            required
          />{' '}
          City
        </label>
        <br />
        <label>
          <input
            data-test-id="checkout-postal-code"
            value={postalCode}
            onChange={(event) => setPostalCode(event.currentTarget.value)}
            required
          />{' '}
          Postal Code
        </label>

        <br />
        <label>
          <input
            data-test-id="checkout-country"
            value={country}
            onChange={(event) => setCountry(event.currentTarget.value)}
            required
          />{' '}
          Country
        </label>
        <br />
        <br />
        <h2>Payment method</h2>
        <label>
          <input
            data-test-id="checkout-credit-card"
            value={creditCard}
            onChange={(event) => setCreditCard(event.currentTarget.value)}
            required
          />{' '}
          Card Number
        </label>

        <br />
        <label>
          <input
            data-test-id="checkout-expiration-date"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.currentTarget.value)}
            required
          />{' '}
          Expiration date
        </label>
        <br />
        <label>
          <input
            data-test-id="checkout-security-code"
            value={securityCode}
            onChange={(event) => setSecurityCode(event.currentTarget.value)}
            required
          />{' '}
          CVV
        </label>
      </div>
    </form>
  );
}
