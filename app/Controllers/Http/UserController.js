'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class UserController {

	async index({ view }) {

		const users = await User.all()



		return view.render('users.index', { 
			users : users.toJSON()

		})
	}

	async create({ view }) {

		return view.render('users.create')

	}

	async store({ request, response, session }) {
		const user = new User()

		const rules = {
			firstname: 'required|alpha|max:100',
			lastname: 'required|alpha|max:100',
			username: 'required|alpha_numeric|unique:users,username',
      		email: 'required|email|unique:users,email',
      		password: 'required|'
    	}
    	const messages = {
			'username.required': 'Please choose a unique username for your account',
			'email.required': 'Enter a valid email address.'
		}

    	const validation = await validate(request.all(), rules)

    	if (validation.fails()) {
    		// session.withErrors(validation.messages()).flashExcept(['password'])
    		// return response.redirect('back')
    		return validation.messages()
    	}

		user.firstname = request.input('firstname')
		user.lastname = request.input('lastname')
		user.username = request.input('username')
		user.email = request.input('email')
		user.password = request.input('password')

		await user.save()
		return response.redirect('/users')
	}


}

module.exports = UserController
