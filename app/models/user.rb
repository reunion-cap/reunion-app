class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :parties
  has_many :items
  validates :first_name,:last_name, :allergies, presence: true
  validates_inclusion_of :over_21, in: [true, false]
end
