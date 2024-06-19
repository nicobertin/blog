class Article < ApplicationRecord
    has_rich_text :content
    has_one_attached :cover
    has_and_belongs_to_many :categories
end