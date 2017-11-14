import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//this makes action flows through all different reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					onClick={() => this.props.selectBook(book)} 
					className="list-group-item" 
					key={book.title}>{book.title}
				>
				</li>
			);
		});
	}

	render() {
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	//whatever gets returned from here shows up
	//as props of our Booklist
	return {
		//asdf: 1234 -> console.log(this.props.asdf) -> 1234
		books: state.books
	};
}

//Anything returned from this function will end up as
//props on the BookList container
function mapDispatchToProps(dispatch) {
	//whenever selectBook is called, the result should be passed to
	//all of our reducers
	//So basically, bind the key value of 'selectBook' to the
	//action imported select book, and the second argument dispatch
	//says to send this new info to all reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a Container - 
//it needs to know about this new dispatch method, selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);