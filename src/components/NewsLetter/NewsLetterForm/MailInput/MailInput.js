import React, { PropTypes } from 'react'
import './MailInput.scss'
import Icons from 'components/Icons'

const propTypes = {
  field: PropTypes.object
}

export const MailInput = (field) => {
  const active = field.meta.dirty || field.meta.active
  return (
    <div className={field.className}>
      <input
        {...field.input}
        type='email'
        className={active ? 'nl-form__input nl-form__input_active' : 'nl-form__input'}
      />
      <label
        htmlFor='email'
        className={active ? 'nl-form__label nl-form__label_active' : 'nl-form__label'}
      >
        <Icons.Mail />
        type your email here
      </label>
    </div>
  )
}

MailInput.propTypes = propTypes
export default MailInput
