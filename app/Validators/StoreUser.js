'use strict'

class StoreUser {

	get validateAll () {
		return true
	}

	get rules() {
		return {
			'firstname': 'required|alpha|max:100',
			'lastname': 'required|alpha|max:100',
			'username': 'required|alpha_numeric|unique:users,username',
			'email': 'required|email|unique:users,email',
			'password': 'required'
		}
	}

	get messages() {
		return {
			'firstname.required' : 'First name is required.',
			'firstname.alpha' : 'First name has to be alpha.',
			'firstname.max' : 'First name can\'t contain more than 100 characters.',

			'lastname.required' : 'Last name is required.',
			'lastname.alpha' : 'Last name has to be alpha.',
			'lastname.max' : 'Last name can\'t contain more than 100 characters.',

			'username.required' : 'Username is required.',
			'username.alpha_numeric' : 'Username has to be alpha numeric.',
			'username.unique' : 'Someone has already taken this username.',

			'email.required' : 'Email address is required.',
			'email.email' : 'Please enter a valid email address.',
			'email.unique' : 'Someone has already used this email.',

			'password.required' : 'Please enter a password.'
		}
	}


}

module.exports = StoreUser
