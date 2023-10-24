export const validationMessagesMap = new Map([
  [
    'firstName',
    {
      message: '',
      required: 'This field is required',
      firstName: 'Name should start with an uppercase letter'
    }
  ],
  [
    'lastName',
    {
      message: ''
    }
  ],
  [
    'email',
    {
      message: '',
      required: 'This field is required',
      email: 'Invalid email address'
    }
  ],
  [
    'phoneNumber',
    {
      message: ''
    }
  ],
  [
    'selfPickup',
    {
      message: ''
    }
  ],
  [
    'address',
    {
      message: '',
      required: 'This field is required'
    }
  ]
]);
