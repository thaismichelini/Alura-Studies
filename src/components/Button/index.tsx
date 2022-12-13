import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
  texto: string;
}> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.texto}
      </button>
    );
  }
}

export default Button;
