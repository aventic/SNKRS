import * as React from 'react';
import Input from '@src/components/Input';
import ValidationHelper from '@src/helpers/validation';

interface INewsletterState {
    fields: any;
}

class FormValidator {
    constructor(validations: any[]) {
        this.validations = validations;
    }

    private validations: any[];

    validate(state: any): any {
        let validation: any = this.valid();

        this.validations.forEach((rule: any) => {
            const isInvalid = rule.method(state.fields[rule.field]);
            if (!validation[rule.field].isInvalid && isInvalid) {
                validation[rule.field] = {
                    isInvalid,
                    message: rule.message
                };

                validation.isValid = false;
            }
        });

        return validation;
    }

    valid() {
        const validation: any = {};

        this.validations.map(rule => {
            validation[rule.field] = { isInvalid: false, message: '' };
        });

        return { isValid: true, ...validation };
    }

    static isEmpty = (input: string): boolean => input.length === 0;
    static isEmail = (input: string): boolean => !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input);
}

class Newsletter extends React.Component<any, INewsletterState> {
    constructor(props: any) {
        super(props);

        this.state = {
            fields: {
                email: ''
            }
        };

        this.validation = this.validator.validate(this.state);
    }

    private validator = new FormValidator([
        { field: 'email', method: FormValidator.isEmpty, message: 'E-mail is missing' },
        { field: 'email', method: FormValidator.isEmail, message: 'E-mail is invalid' }
    ]);

    private validation: any;

    private handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {};

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.validation = this.validator.validate(this.state);

        if (this.validation.isValid) {
            console.log('form IS goood');
        }
    };

    private handleChange = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        let fields = this.state.fields;
        fields[fieldName] = e.currentTarget.value;
        this.setState({ fields });
    };

    render() {
        return (
            <div className="newsletter">
                <div className="rte">
                    <header className="newsletter__header">Lets keep in touch</header>
                    <p>Subscribe to receive the latest SNKRS news</p>
                </div>
                <form className="newsletter__form" noValidate onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className="newsletter__input input"
                            placeholder="Enter your e-mail"
                            value={this.state.fields['email']}
                            onChange={e => this.handleChange('email', e)}
                        />
                        {this.validation.email.message}
                    </div>
                    <button type="submit" className="button button_primary">
                        Subscribe
                    </button>
                </form>
            </div>
        );
    }
}

export default Newsletter;
