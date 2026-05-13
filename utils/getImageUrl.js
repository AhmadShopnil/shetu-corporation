export const getImageUrl = (image_media) => {
    if (!image_media) return null;
    return (
        `https://www.shetu.mathmozo.com//${image_media.file_directory}${image_media.filename}` ||
        null
    );


};