import { LitElement, html } from 'lit-element';
class SampleElement extends LitElement {
  // The properties that your element exposes.
  static get properties() { return {
    publicProperty: { type: Number },
    _privateProperty: { type: String }    /* note the leading underscore */
  }};

  constructor() {
    super();
    // Set up the property defaults here
    this.publicProperty = 0;
    this._privateProperty = '';
  }

  render() {
    // Note the use of the object spread to explicitely
    // call out which properties you're using for rendering.
    const {publicProperty, _privateProperty} = this;

    // Anything code that is related to rendering should be done in here.

    return html`
      <!-- your element's template goes here -->
    `;
  };

  firstUpdated() {
    // Any code that relies on render having been called once goes here.
    // (for example setting up listeners, etc)
  }
 
}
window.customElements.define('sample-element', SampleElement);