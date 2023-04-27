import React, { Component } from 'react'
import Spinner from './Spinner';
import './style.css';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loader: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}`
    }

    async updateNews() {
        let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfb0c9de09824e38ab603ad6723436d3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loader: true });
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loader: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfb0c9de09824e38ab603ad6723436d3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loader: true });
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loader: false
        })
    };

    // handlePrev = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     });
    //     this.updateNews();
    // }
    // handleNext = async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     });
    //     this.updateNews();
    // }


    render() {
        return (
            <>
                <h1 className='text-center'>New Related To - {this.capitalizeFirstLetter(this.props.category)}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((Element) => {
                                return <div className='item col-md-4 mt-4' key={Element.url}>
                                    <NewsItems title={Element.title ? Element.title : ""}
                                        description={Element.description ? Element.description : ""}
                                        imgUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News