class User < ApplicationRecord
  has_secure_password

  validate :only_one_user_with_admin_email, on: :create

  private

  def only_one_user_with_admin_email
    if User.exists?
      errors.add(:base, "Only one user can have the admin email")
    elsif email != ENV["ADMIN_EMAIL"]
      errors.add(:email, "must be the admin email")
    end
  end
end
