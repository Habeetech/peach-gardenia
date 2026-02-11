import './RequestForm.css'
import { getNames } from 'country-list';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js'
import metadata from 'libphonenumber-js/metadata.full.json';

const countries = getNames();
const phoneCountries = getCountries();

async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const caseworkersDetails = JSON.stringify(Object.fromEntries(formData));
    try {
        const response = await fetch('http://localhost:3000/caseworker/requestform', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: caseworkersDetails
        });

        if (!response.ok) {
            throw new Error(`Http error status: ${response.status}`)
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error: ', error);
    }
}
export function RequestForm() {

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Caseworker's Request Form</h2>
            <p className="form-intro">Thanks for your interest in using our platform. We believe <i>Every kind deserves a birthday gift</i>. We therefore created this platform to achieve that. Please fill in your details below and we shall get back to you as soon as your request's been accepted</p>
            <form aria-describedby="form-intro" method="POST" onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <legend>Personal Information</legend>

                    <label htmlFor="first-name">First Name:
                        <input id="first-name" type="text" name="firstName" autoComplete="given-name" required maxLength={50} />
                    </label>

                    <label htmlFor="last-name">Last Name:
                        <input id="last-name" type="text" name="lastName" autoComplete="family-name" required maxLength={50} />
                    </label>

                    <label htmlFor="phone-number">Phone Number:
                        <div className="phone-field">
                            <select id="country-code" name="countryCode" autoComplete="tel-country-code" required>
                                <option value="">Code</option>
                                {phoneCountries.map(code => (
                                    <option key={code} value={`+${getCountryCallingCode(code, metadata)}`}>
                                        +{getCountryCallingCode(code, metadata)} ({code})
                                    </option>
                                ))}
                            </select>

                            <input
                                id="phone-number"
                                name="phoneNumber"
                                type="tel"
                                autoComplete="tel-national"
                                required
                            />
                        </div>
                    </label>


                    <label htmlFor="email">Email:
                        <input id="email" name="email" type="email" autoComplete="email" required />
                    </label>

                    <label htmlFor="address-1">Address Line 1:
                        <input id="address-1" name="address1" type="text" autoComplete="address-line1" required />
                    </label>

                    <label htmlFor="address-2">Address Line 2:
                        <input id="address-2" name="address2" type="text" autoComplete="address-line2" />
                    </label>

                    <label htmlFor="city">City:
                        <input id="city" name="city" type="text" autoComplete="address-level2" required maxLength={30} />
                    </label>

                    <label htmlFor="county">State/County:
                        <input
                            id="county"
                            name="county"
                            type="text"
                            autoComplete="address-level1"
                            required
                            maxLength={30}
                        />
                    </label>


                    <label htmlFor="zip-code">Zip Code:
                        <input id="zip-code" name="zipCode" type="text" autoComplete="postal-code" required maxLength={30} />
                    </label>

                    <label htmlFor="country">Country:
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            required
                        >
                            <option value="">Select a country</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </label>

                </fieldset>

                <fieldset>
                    <legend>Organisation Information</legend>

                    <label htmlFor="org-name">Name:
                        <input id="org-name" type="text" name="orgName" autoComplete="organization" required maxLength={50} />
                    </label>

                    <label htmlFor="org-tel">Telephone:
                        <div className="phone-field">
                            <select
                                id="org-country-code"
                                name="orgCountryCode"
                                autoComplete="tel-country-code"
                                required
                            >
                                <option value="">Code</option>
                                {phoneCountries.map(code => (
                                    <option
                                        key={code}
                                        value={`+${getCountryCallingCode(code, metadata)}`}
                                    >
                                        +{getCountryCallingCode(code, metadata)} ({code})
                                    </option>
                                ))}
                            </select>

                            <input
                                id="org-tel"
                                name="orgTel"
                                type="tel"
                                autoComplete="tel-national"
                                required
                            />
                        </div>
                    </label>


                    <label htmlFor="org-email">Email:
                        <input id="org-email" name="orgEmail" type="email" autoComplete="email" required />
                    </label>

                    <label htmlFor="org-address-1">Address Line 1:
                        <input id="org-address-1" name="orgAddress1" type="text" autoComplete="address-line1" required />
                    </label>

                    <label htmlFor="org-address-2">Address Line 2:
                        <input id="org-address-2" name="orgAddress2" type="text" autoComplete="address-line2" />
                    </label>

                    <label htmlFor="org-city">City:
                        <input id="org-city" name="orgCity" type="text" autoComplete="address-level2" required maxLength={30} />
                    </label>

                    <label htmlFor="org-county">State/County:
                        <input id="org-county" name="orgCounty" type="text" autoComplete="address-level1" required maxLength={30} />
                    </label>

                    <label htmlFor="org-zip-code">Zip Code:
                        <input id="org-zip-code" name="orgZipCode" type="text" autoComplete="postal-code" required maxLength={30} />
                    </label>

                    <label htmlFor="org-country">Country:
                        <select
                            id="org-country"
                            name="orgCountry"
                            autoComplete="country-name"
                            required
                        >
                            <option value="">Select a country</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </label>

                </fieldset>

                <label htmlFor="additional-info">Would you like to add any other information?
                    <textarea id="additional-info" name="additionalInfo" autoComplete="off"></textarea>
                </label>

                <label htmlFor="terms-conditions">
                    <input id="terms-conditions" name="termsConditions" type="checkbox" value="accepted" required />
                    <a href="#termandcondition">Please click this link to read the terms of service here</a>
                </label>

                <button type="submit">Request Registration</button>
            </form>
        </div>
    )
}