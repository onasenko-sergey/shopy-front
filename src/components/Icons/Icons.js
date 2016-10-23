import React, { PropTypes } from 'react'
import './Icons.scss'

const propTypes = {
  iconType: PropTypes.string.isRequired,
  highlighted: PropTypes.bool
}

export const Icon = ({ iconType, highlighted }) => {
  const className = highlighted ? `icon_${iconType} icon_${iconType}_active` : `icon_${iconType}`
  return (
    <span className={className} />
  )
}

Icon.propTypes = propTypes

export const MailIcon = (props) => (
  <Icon iconType='mail' {...props} />
)

export const PhoneIcon = (props) => (
  <Icon iconType='phone' {...props} />
)

export const FacebookIcon = (props) => (
  <Icon iconType='facebook' {...props} />
)

export const TwitterIcon = (props) => (
  <Icon iconType='twitter' {...props} />
)

export const GooglePlusIcon = (props) => (
  <Icon iconType='googlePlus' {...props} />
)

export const InstagramIcon = (props) => (
  <Icon iconType='instagram' {...props} />
)

export const SearchIcon = (props) => (
  <Icon iconType='search' {...props} />
)

export const UserIcon = (props) => (
  <Icon iconType='user' {...props} />
)

export const CartIcon = (props) => (
  <Icon iconType='cart' {...props} />
)

export const ShareIcon = (props) => (
  <Icon iconType='share' {...props} />
)

export const AddToCartIcon = (props) => (
  <Icon iconType='add-to-cart' {...props} />
)

export const LikeIcon = (props) => (
  <Icon iconType='like' {...props} />
)

export const StarIcon = (props) => (
  <Icon iconType='star' {...props} />
)

const Icons = {
  Mail: MailIcon,
  Phone: PhoneIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  GooglePlus: GooglePlusIcon,
  Instagram: InstagramIcon,
  Search: SearchIcon,
  User: UserIcon,
  Cart: CartIcon,
  Share: ShareIcon,
  AddToCart: AddToCartIcon,
  Like: LikeIcon,
  Star: StarIcon
}

export default Icons
