import ReactCountryFlag from 'react-country-flag'

export const Flag = ({ country }) => {
  return (
    <ReactCountryFlag
      countryCode={country.countryCode}
      svg
      style={{
        width: '1em',
        height: '1em',
      }}
      title={country.countryName}
    />
  )
}
