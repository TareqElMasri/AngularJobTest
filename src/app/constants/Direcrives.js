/** @ngInject */
import $ from 'jquery';
import InputFilters from './InputFilters';
export function focusWithArrow() {
    return {
        link: ($scope, $element, $attr) => {
            $element = $($element);
            $element.keyup(($event) => {
                const $targetInput = $event.target;
                const $targetInputs = $(`[focus-with-arrow]`);
                const targetAttrs = $targetInput.attributes;
                const targetValue = $targetInput.value;
                const targetType = $targetInput.type;
                const isArrowLeft = $event.key === 'ArrowLeft';
                const isArrowRight = $event.key === 'ArrowRight';
                const valueLength = parseInt(targetValue.length);
                const inputMaxValue = targetAttrs.max ? parseInt(targetAttrs.max.value) - 1 : undefined;
                const inputLimitValue = inputMaxValue ? inputMaxValue : valueLength;
                const selectedIndex = parseInt($scope.$eval($attr.focusWithArrow));
                const cursorPosition = parseInt($element.getCursorPosition());

                if (valueLength !== 0 && selectedIndex !== $targetInputs.length - 1 &&
                    isArrowRight && (targetType === 'number' || cursorPosition === inputLimitValue)) {
                    $scope.$ctrl[$attr.focusWithArrow.split('.')[1]] = selectedIndex + 1;
                    $targetInputs.eq(selectedIndex + 1).setCursorPosition(0);
                }
                if (isArrowLeft && cursorPosition === 0 && selectedIndex !== 0) {
                    $scope.$ctrl[$attr.focusWithArrow.split('.')[1]] = selectedIndex - 1;
                    $targetInputs.eq(selectedIndex - 1).setCursorPosition(100);
                }
                $scope.$apply();
            });
        }
    };
}