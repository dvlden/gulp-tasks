import getTaskConfig from '../getTaskConfig';
import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import imageMinMozJPEG from 'imagemin-mozjpeg';
import imageMinPNGQuant from 'imagemin-pngquant';
import newer from 'gulp-newer';
import util from 'gulp-util';

const config = getTaskConfig('images');
const inProduction = util.env.production;

export function imagesTask () {
    return gulp.src(config.paths.src)
        .pipe(newer(config.paths.dest))
        .pipe(imageMin([imageMin.gifsicle(), imageMinMozJPEG(), imageMinPNGQuant(), imageMin.svgo()], config.addons.imageMin))
        .on('error', e => util.log(e))
        .pipe(gulp.dest(config.paths.dest))
}

gulp.task('images', imagesTask)
