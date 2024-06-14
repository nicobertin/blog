class ApplicationController < ActionController::Base
    include JsonWebToken

    rescue_from JWT::DecodeError, with: :jwt_decode_error
    before_action :set_current_user

    private

    def set_current_user
        token = session[:token]
        @current_user = if token.present?
                        decoded = jwt_decode(token)
                        User.find_by(id: decoded[:user_id])
                        end
    end

    def authenticate!
        return if @current_user
        redirect_to login_view_path unless @current_user
    end

    def jwt_decode_error
        redirect_to login_view_path unless @current_user
    end
end
