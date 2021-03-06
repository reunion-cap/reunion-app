class PartiesController < ApplicationController
  def index
    parties= Party.all
    render json: parties
  end

  # show
  def show
    party = Party.find(params[:id])
    render json: party.as_json(include: [:user, {items: {include: :user}}])
  end

  # use params to get party
  # items = Item.all
  # mappedItems = party.items.map do |item|

  # set party in a variable and get items
  # make new var updated items = party.items.map over items and return item + first name last name (maybe like item.user)
  # set party.items = updated_items
  # render json: party

  #searchaction


  def create
    party=Party.create(party_params)
    if party.valid?
      render json: party
    else
      render json: party.errors, status: 422 #unproccessable entity
    end
  end

  def update
    party = Party.find(params[:id])
    party.update(party_params)
    if party.valid?
      render json: party
    else
      render json: party.errors, status: 422 #unproccessable entity
    end
  end

  private #private only permits the user to add these columns to the database, allows you to only pass this data.
    def party_params
      params.require(:party).permit(:party_name, :party_start_time, :location, :description, :user_id)
    end

end
