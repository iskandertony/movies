'use client'
import { useTransitionStore } from '@shared/model/transitionStore';
import styles from './PageTransitionOverlay.module.scss';

export const PageTransitionOverlay = () => {
    const isTransitioning = useTransitionStore(state => state.isTransitioning);

    if (!isTransitioning) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.spinner} />
        </div>
    );
};
