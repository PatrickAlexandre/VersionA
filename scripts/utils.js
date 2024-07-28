
// Utility functions
function getColor(lastCollection) {
    const today = new Date();
    const collectionDate = new Date(lastCollection);
    const diffDays = Math.floor((today - collectionDate) / (1000 * 60 * 60 * 24));
    return diffDays <= 30 ? '#9ACD32' : (diffDays <= 60 ? '#FFA500' : '#DC143C');
}
    