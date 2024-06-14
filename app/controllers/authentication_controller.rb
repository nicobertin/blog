class AuthenticationController < ApplicationController

    def login
        user = User.find_by_email(params[:email])

        if user&.authenticate(params[:password])
            token = jwt_encode({ user_id: user.id })
            session[:token] = token
            redirect_to root_path, notice: 'Logged in successfully.'
        else
            flash[:email] = params[:email]
            redirect_to login_view_path, alert: 'Invalid email or password.'
        end
    end

    def logout
        session.delete(:token)
        redirect_to login_view_path, notice: 'Logged out successfully.'
    end

    private

    def user_params
        params.permit(:email, :password)
    end
    
end
