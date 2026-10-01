#!/bin/bash

echo "======================================"
echo " Student Registration CI Tests"
echo "======================================"

# Check files
test -f index.html || {
    echo "❌ index.html missing"
    exit 1
}

test -f style.css || {
    echo "❌ style.css missing"
    exit 1
}

test -f script.js || {
    echo "❌ script.js missing"
    exit 1
}

echo "✅ Required files exist"


# HTML checks

grep -q "<form" index.html || {
    echo "❌ Form missing"
    exit 1
}

grep -q 'type="text"' index.html || {
    echo "❌ Name field missing"
    exit 1
}

grep -q 'type="email"' index.html || {
    echo "❌ Email field missing"
    exit 1
}

grep -q 'type="password"' index.html || {
    echo "❌ Password field missing"
    exit 1
}

grep -q 'name="gender"' index.html || {
    echo "❌ Gender field missing"
    exit 1
}

grep -q "<select" index.html || {
    echo "❌ Course field missing"
    exit 1
}

grep -q 'type="date"' index.html || {
    echo "❌ DOB field missing"
    exit 1
}

grep -q 'type="submit"' index.html || {
    echo "❌ Submit button missing"
    exit 1
}


# CSS and JS checks

grep -q "registration-card" style.css || {
    echo "❌ CSS styling missing"
    exit 1
}

grep -q "addEventListener" script.js || {
    echo "❌ JavaScript functionality missing"
    exit 1
}

echo ""
echo "======================================"
echo " 🎉 ALL TESTS PASSED!"
echo "======================================"

exit 0