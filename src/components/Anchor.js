import theme from '../data/theme';

const Anchor = ({ children, href, target }) => (
  <a href={href} target={target} rel={target === '_blank' && 'noopener noreferrer'} style={{ color: theme.anchor.color }}>
    {children}
  </a>
);

export default Anchor;
