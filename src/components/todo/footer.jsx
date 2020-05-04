export default {
    data() {
        return {
            author: 'xc9010'
        }
    },
    render() {
        return (
            <div id="footer" style={{ textAlign: 'center' }}>
                <span>Write by {this.author}</span>
            </div>
        )
    }
}