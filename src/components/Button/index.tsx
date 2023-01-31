import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  text: string;
}> {
  render() {
    const { type = 'button', onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
