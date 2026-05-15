#!/bin/bash
# utility per scaricare font Cabinet Grotesk (non committato per licenza)

FONTS_DIR="public/fonts"
mkdir -p "$FONTS_DIR"

echo "Download Cabinet Grotesk..."
echo ""
echo "Vai su https://www.fontshare.com/fonts/cabinet-grotesk"
echo "Clicca Download, estrai lo zip e copia i file 'CabinetGrotesk-Bold.woff2' e 'CabinetGrotesk-ExtraBold.woff2' in $FONTS_DIR/"
echo ""
echo "File necessari:"
echo "  - CabinetGrotesk-Bold.woff2     (weight 800)"
echo "  - CabinetGrotesk-ExtraBold.woff2 (weight 900)"
echo ""

# Space Grotesk e Space Mono sono già nel repo perché sono sotto licenza OFL, ma se mancano:
if [ ! -f "$FONTS_DIR/SpaceGrotesk-Variable.woff2" ]; then
  echo "Download Space Grotesk..."
  wget -q "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2" \
    -O "$FONTS_DIR/SpaceGrotesk-Variable.woff2"
fi

if [ ! -f "$FONTS_DIR/SpaceMono-Regular.woff2" ]; then
  echo "Download Space Mono..."
  wget -q "https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2" \
    -O "$FONTS_DIR/SpaceMono-Regular.woff2"
  wget -q "https://fonts.gstatic.com/s/spacemono/v17/i7dMIFZifjKcF5UAWdDRaPpZUFWaHg.woff2" \
    -O "$FONTS_DIR/SpaceMono-Bold.woff2"
  wget -q "https://fonts.gstatic.com/s/spacemono/v17/i7dNIFZifjKcF5UAWdDRYERMR3K_.woff2" \
    -O "$FONTS_DIR/SpaceMono-Italic.woff2"
fi

echo "Fatto."