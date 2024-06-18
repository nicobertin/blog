class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show edit update destroy like ]
  before_action :authenticate!, except: %i[ index show like ]
  # GET /articles
  def index
    @articles = Article.all
  end

  # GET /articles/1
  def show
  end

  # GET /articles/new
  def new
    @article = Article.new
  end

  # GET /articles/1/edit
  def edit
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article, notice: "Article was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      redirect_to @article, notice: "Article was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy!
    redirect_to articles_url, notice: "Article was successfully destroyed.", status: :see_other
  end

  def like
    @article.likes ||= 0
    if cookies[@article.id.to_s] == 'liked'
      @article.likes -= 1
      cookies.delete(@article.id.to_s)
    else
      @article.likes += 1
      cookies[@article.id.to_s] = 'liked'
    end
    @article.save
    respond_to do |format|
      format.html { redirect_to @article }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :content, :cover)
    end
end
