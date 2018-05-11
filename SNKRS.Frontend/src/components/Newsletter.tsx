import * as React from 'react';

interface INewsletterState {
    email: string;
}

class Newsletter extends React.Component<any, INewsletterState> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: ''
        };
    }

    private handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ email: e.currentTarget.value });
    };

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (this.state.email && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
            console.log('THIS IS OK');
        }
    };

    render() {
        return (
            <div className="newsletter">
                <form className="newsletter__form" noValidate onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="newsletter__input input"
                        placeholder="Receive the latest SNKRS news, enter your e-mail"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <button type="submit" className="button button_primary">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}

export default Newsletter;
